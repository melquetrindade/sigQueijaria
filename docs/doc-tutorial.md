## 🚀 Como rodar o projeto

## 1° Passo: Clonar o repositório
Crie uma pasta e dentro dela execute: ```git clone https://github.com/melquetrindade/sigQueijaria.git```

## 2° Passo: Instalar o Ambiente Virtual e o Django
Na pasta 'back_end' do projeto execute:
  > * 1º ```python -m venv sigQueijaria```
  > * 2º ```pip install Django```

## 3° Passo: Instalar as bibliotecas necessárias no Back-end
Na pasta 'api' dentro da pasta 'back_end' execute:
  > *  1º ```pip install django-rest-framework```
  > *  2º ```pip install djangorestframework-simplejwt```
  > *  3º ```python -m pip install django-cors-headers```

## 4° Passo: Realizar a migração dos dados
Na mesma pasta do passo 3, execute:
  > *  1º ```python manage.py makemigrations```
  > *  2º ```python manage.py migrate```
  > *  3º ```python manage.py migrate --run-syncdb```

## 5° Passo: Instalar as bibliotecas necessárias no Front-end
Na pasta 'front_end' do projeto execute:
  > * 1º ```npm install jwt-decode```

## 6° Passo: Iniciar os servidores back-end e front-end
Abra dois terminais, um para cada servidor.<br>

Na pasta 'api' dentro da pasta 'back_end' execute:
  > *  1º ```python manage.py runserver``` em seguida entre no link fornecido<br>

Na pasta 'front_end' do projeto execute:
  > *  2º ```npm run dev``` em seguida entre no link fornecido

## Agora você já está com o projeto rodando, aproveite!
