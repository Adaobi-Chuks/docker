FROM python:3.13

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN python -c "import json; \
   lock_data = json.load(open('Pipfile.lock')); \
   deps = lock_data['default']; \
   requirements = ['{}=={}'.format(pkg, details['version'].strip('==')) for pkg, details in deps.items()]; \
   open('requirements.txt', 'w').write('\\n'.join(requirements))"

# Install dependencies from requirements.txt
RUN pip install -r requirements.txt

COPY . ./

CMD [ "python", "main.py" ]