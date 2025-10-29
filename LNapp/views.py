from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings

from .models import Book, CaseStudy

# Create your views here.

def home(request):
    books = Book.objects.all().order_by('-preorder', '-id')
    case_studies = CaseStudy.objects.all().order_by('-date')
    context = {
        "books": books,
        "case_studies": case_studies,
    }
    return render(request, "home.html", context)


def contact_submit(request):
    if request.method == 'POST':
        # 1. Extract Data from the Form
        fullname = request.POST.get('fullname', '')
        phone = request.POST.get('phone', 'N/A')
        email = request.POST.get('email', '')
        service = request.POST.get('revenue', 'Not Selected')
        referral = request.POST.get('referral', 'Not Selected')
        message_body = request.POST.get('message', '')

        # Checkboxes need special handling; presence means checked
        request_excerpt = 'Yes' if 'agreement_excerpt' in request.POST else 'No'
        agree_privacy = 'Yes' if 'agreement_privacy' in request.POST else 'No'


        # Basic Validation
        if not fullname or not email or not message_body:
            messages.error(request, 'Please fill in the required Name, Email, and Message fields.')
            return redirect(request.META.get('HTTP_REFERER', '/'))

        # 2. Format the Email Content
        subject = f'New Contact Inquiry from: {fullname}'

        message_plain = f"""
        Name: {fullname}
        Email: {email}
        Phone: {phone}
        Service Needed: {service}
        Referral Source: {referral}
        Request Book Excerpt: {request_excerpt}
        Agreed to Privacy/Comms: {agree_privacy} 

        --- Message ---
        {message_body}
        """

        # 3. Define Recipients
        # This is the email address that will RECEIVE the contact data
        recipient_list = ['deltaversesolutions@gmail.com']

        try:
            # 4. Send the Email
            send_mail(
                subject,
                message_plain,
                settings.DEFAULT_FROM_EMAIL,  # Uses the address from settings.py
                recipient_list,
                fail_silently=False,  # Set to True to suppress exceptions
            )

            messages.success(request, 'Thank you! Your message has been sent successfully.')

        except Exception as e:
            # Log the error for debugging purposes
            print(f"Email sending failed: {e}")
            messages.error(request, 'There was an error sending your message. Please try again later.')

        # 5. Redirect the user back to the originating page
        return redirect(request.META.get('HTTP_REFERER', '/'))

    return redirect('/')