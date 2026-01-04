import os
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

# Load environment variables
load_dotenv()

app = FastAPI()

# Allow local frontend dev servers
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://lolothemisfit.github.io",
    "https://portfolio-api-luy5.onrender.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for contact form
class Contact(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str


def _get_sendgrid_config():
    return {
        "api_key": os.getenv("SENDGRID_API_KEY"),
        "sender": os.getenv("SENDGRID_SENDER"),
        "receiver": os.getenv("RECEIVER_EMAIL"),
    }


def send_email_via_sendgrid(data: dict):
    """
    Send a contact form email via SendGrid.
    - From: your verified SendGrid email
    - Reply-To: visitor's email
    """
    cfg = _get_sendgrid_config()
    missing = [k for k, v in cfg.items() if not v]
    if missing:
        raise RuntimeError(f"Missing SendGrid configuration: {missing}")

    from sendgrid import SendGridAPIClient
    from sendgrid.helpers.mail import Mail, Email

    subject = f"Contact form: {data.get('subject') or 'New message'}"
    sender_name = "Portfolio Contact Form"  # This name appears in the inbox
    sender_email = cfg["sender"]           # Verified SendGrid email
    receiver_email = cfg["receiver"]       # Your Gmail inbox

    body_text = (
        f"Name: {data.get('name')}\n"
        f"Email: {data.get('email')}\n\n"
        f"Message:\n{data.get('message')}"
    )

    # Build the Mail object
    message = Mail(
        from_email=Email(sender_email, name=sender_name),
        to_emails=receiver_email,
        subject=subject,
        plain_text_content=body_text
    )

    # Set Reply-To so replies go to the visitor
    if data.get("email"):
        message.reply_to = Email(data.get("email"), name=data.get("name"))

    try:
        sg = SendGridAPIClient(cfg["api_key"])
        response = sg.send(message)
        if response.status_code >= 400:
            raise RuntimeError(f"SendGrid error: {response.status_code} {response.body}")
    except Exception as e:
        raise RuntimeError(f"Failed to send email via SendGrid: {e}")



@app.post("/contact")
def post_contact(contact: Contact, background_tasks: BackgroundTasks):
    """Receive contact form data and send an email in the background using SendGrid."""
    if not contact.message.strip():
        raise HTTPException(status_code=400, detail="Message is required")

    background_tasks.add_task(send_email_via_sendgrid, contact.dict())
    return {"detail": "Message sent"}


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
