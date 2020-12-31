from .base import *
from pathlib import Path
import os

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DJANGO_ENV') == 'dev'

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '57ow(yx*0ku7d3kvfv1&bkop#7g6fm$_3h%a$ok_&ay5dd_x&x'



ALLOWED_HOSTS = ["0.0.0.0", "localhost"]