from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required

from .forms import RegistrationForm, CalcForm


@login_required
def index(request):
    if request.method == 'POST':
        form = CalcForm(request.POST)
        if form.is_valid():
            return render( request, 'calc/index.html', {'form': form,
                                                          'result': form.calculate()})
        return render( request, 'calc/index.html', {'form': form,} )
    else:
        form = CalcForm()
        return render( request, 'calc/index.html', {'form': form,} )


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
                username = form.cleaned_data['username'],
                password = form.cleaned_data['password1'],
                email = form.cleaned_data['email']
            )
            return HttpResponseRedirect('/')
        return render( request, 'registration/register.html', {'form': form,} )
    else:
        form = RegistrationForm()
        return render( request, 'registration/register.html', {'form': form,} )