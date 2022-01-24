from django.shortcuts import render

# Create your views here.
def ContactViews(request):
    return render(request,'contact.html')