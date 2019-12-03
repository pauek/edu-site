#!/bin/bash
curl localhost:8080/alter -XPOST -d $'

nombre: string @index(term) .
asignatura.codigo: int @index(int) .
edicion: uid .
tipo.evaluacion: [uid] .
tipo.tarea: [uid] .

type Asignatura {
  nombre: string
  asignatura.codigo: int
  edicion: uid
  tipo.evaluacion: [uid]
  tipo.tarea: [uid]
}

anyo: int @index(int) .
periodo: string @index(exact) .
grupo: [uid] .
evaluacion: [uid] .
tarea: [uid] .

type Edicion {
  anyo: int
  periodo: string
  grupo: [uid]
  evaluacion: [uid]
  tarea: [uid]
}

peso: float .
descripcion: string @index(fulltext) .
evaluacion: [uid] .

type TipoEvaluacion {
  nombre: string
  peso: float
  descripcion: string
  evaluacion: [uid]
}

type TipoTarea {
  nombre: string
  tarea: [uid]
}

grupo.codigo: string .
profesor: uid .
alumno: [uid] .
sesion: [uid] .

type Grupo {
  nombre: string
  grupo.codigo: string
  profesor: uid
  alumno: [uid]
  sesion: [uid]
}

fecha: dateTime @index(day) .

type Evaluacion {
  fecha: dateTime
  nombre: string
  peso: float
  sesion: [uid]
}

entrega: [uid] .

type Tarea {
  nombre: string
  fecha: dateTime
  entrega: [uid]
}

fichero: uid .

type Enunciado {
  nombre: string
  fichero: uid
}

apellidos: string .
DNI: string .
email: string .
persona.nota: [uid] .

type Persona {
  nombre: string
  apellidos: string
  DNI: string
  email: string
  persona.nota: [uid]
}

type SesionEvaluacion {
  fecha: dateTime
}

nota.valor: float @index(float) .
persona: uid .

type Nota {
  nota.valor: float
  sesion: uid
  persona: uid
}

type Entrega {
  fecha: dateTime
  nota: uid
  fichero: [uid]
}

type Fichero {
  nombre: string
}

' | python -m json.tool
