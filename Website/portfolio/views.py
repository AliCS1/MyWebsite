from django.shortcuts import render

# Create your views here.

def portfolioViews(request):
    return render(request,'portfolio.html')