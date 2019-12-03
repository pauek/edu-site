#!/bin/bash
curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true -d $'
{
  set {
    <_:fi> <dgraph.type> "Asignatura" .
    <_:fi> <nombre> "Fonaments d\'Informàtica" .
    <_:fi> <asignatura.codigo> "320095" .

    <_:edoo> <dgraph.type> "Asignatura" .
    <_:edoo> <nombre> "Estructures de Dades i Orientació a Objectes" .
    <_:edoo> <asignatura.codigo> "320099" .
  }
}
' | python -m json.tool
