from django import forms


class RegistrationForm(forms.Form):
    username = forms.CharField(label=u'Username', max_length=30)
    email = forms.EmailField(label=u'Email')
    password1 = forms.CharField( label=u'Password', widget=forms.PasswordInput() )
    password2 = forms.CharField( label=u'Password (Again)', widget=forms.PasswordInput() )

    def clean_password2(self):
        if 'password1' in self.cleaned_data:
            password1 = self.cleaned_data['password1']
            password2 = self.cleaned_data['password2']
            if password2 == password1:
                return password2
        raise forms.ValidationError('Passwords do not match.')


def validate_operator(value):
    if value not in ['+', '-', '/', '*']:
        raise forms.ValidationError("%s is not a valid operator. Use on of the following: '+', '-', '/', '*' " % value)

class CalcForm(forms.Form):
    arg1 = forms.IntegerField()
    operator = forms.CharField(validators=[validate_operator])
    arg2 = forms.IntegerField()

    def calculate(self):
        return 42



