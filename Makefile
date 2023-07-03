#TODO
run-website:
    cd website && python -m http.server


run-server:
    FLASK_APP=fapi.py flask run


run-all: run-website run-server