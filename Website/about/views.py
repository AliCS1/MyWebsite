from django.shortcuts import render

def AboutViews(request):
    return render(request,'about.html')