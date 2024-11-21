name = 'joshua'
age = 18

print(f'Hola {name}, tu edad es {age}') # saludo mas eficiente!


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f'Hola {self.name}, tu edad es {self.age}'

p = Person('joshua', 18)
print(p)