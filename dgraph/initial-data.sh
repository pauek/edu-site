#!/bin/bash
curl -H "Content-Type: application/rdf" -X POST localhost:8080/mutate?commitNow=true -d $'
{
  set {
    <_:fi> <dgraph.type> "Course" .
    <_:fi> <name> "Fonaments d\'Informàtica" .
    <_:fi> <acronym> "fi" .
    <_:fi> <course.code> "320095" .

    <_:edoo> <dgraph.type> "Course" .
    <_:edoo> <name> "Estructures de Dades i Orientació a Objectes" .
    <_:edoo> <acronym> "edoo" .
    <_:edoo> <course.code> "320099" .
  }
}
' | python -m json.tool
