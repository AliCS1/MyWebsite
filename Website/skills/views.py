from django.shortcuts import render

# Create your views here.
rooms = [
    {'id': 1, 'name':'LETS LEARN PYTHON!'},
    {'id':2, 'name':'Designing!'},
    {'id': 3, 'name':'frontend dev'},
]

def SkillsViews(request):
    context = {'rooms': rooms}
    return render(request,'skills.html', context)