name = 'joshua'
age = 18
job = 'developer'
# print(f'Hola {name}, tu edad es {age}') # saludo mas eficiente!


class Person:
    def __init__(self, name, age, job):
        self.name = name
        self.age = age
        self.job = job
    
    def __sal__(self):
        print(f'Hola {self.name}, tu edad es {self.age} y trabajas como {self.job}')
        return 0;

p = Person(name, age, job)
print(p.__sal__())

# comentario agregado al final de la funcion