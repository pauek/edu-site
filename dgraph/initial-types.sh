#!/bin/bash
curl localhost:8080/alter -XPOST -d $'

name: string @index(term) .
acronym: string @index(hash) .
asignatura.codigo: int @index(int) .

type Course {
  name: string
  acronym: string
  course.code: int
}

' | python -m json.tool
