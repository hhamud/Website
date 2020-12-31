
from .base import *
from pathlib import Path
import os



# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['SECRET_KEY']



ALLOWED_HOSTS = ["0.0.0.0", "localhost", "agile-citadel-92315.herokuapp.com"]


