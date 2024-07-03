## 🚀 Como rodar o projeto no Linux

## 1° Passo: Clonar o repositório
Crie uma pasta e dentro dela execute: ```git clone https://github.com/melquetrindade/sigQueijaria.git```

## 2° Passo: Instalar o Pip
Na pasta 'back_end' do projeto execute:
  > * 1º ```sudo apt install python3-pip```

## 3° Passo: Instalar, criar e executar o Ambiente Virtual
Na pasta 'back_end' do projeto execute:
  > * 1º ```sudo apt install python3-virtualenv```
  > * 2º ```virtualenv sigQueijaria_env```
  > * 3º ```source sigQueijaria_env/bin/activate```

## 4° Passo: Instalar o Django
Na pasta 'back_end' do projeto execute:
  > * 1º ```pip3 install Django```

## 5° Passo: Instalar as bibliotecas necessárias no Back-end
Na pasta 'api' dentro da pasta 'back_end' execute:
  > *  1º ```pip3 install django-rest-framework```
  > *  2º ```pip3 install djangorestframework-simplejwt```
  > *  3º ```python3 -m pip install django-cors-headers```

## 6° Passo: Realizar a migração dos dados
Na mesma pasta do passo 3, execute:
  > *  1º ```python3 manage.py makemigrations```
  > *  2º ```python3 manage.py migrate```
  > *  3º ```python3 manage.py migrate --run-syncdb```

## 7° Passo: Instalar o npm e as bibliotecas necessárias no Front-end
Na pasta 'front_end' do projeto execute:
  > * 1º ```sudo apt install npm```
  > * 2º ```npm install jwt-decode```

## 8° Passo: Iniciar os servidores back-end e front-end
Abra dois terminais, um para cada servidor.<br>

Na pasta 'api' dentro da pasta 'back_end' execute:
  > *  1º ```python3 manage.py runserver``` em seguida entre no link fornecido<br>

Na pasta 'front_end' do projeto execute:
  > *  2º ```npm run dev``` em seguida entre no link fornecido

## Agora você já está com o projeto rodando, aproveite!
