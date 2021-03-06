---
date: 2020-05-14
title: "Spring give you an advice"
template: post
thumbnail: "../images/spring.png"
slug: spring-controller-advice
published: true
categories:
  - Spring
tags:
  - Spring
  - First step
---

    Spring give you an advice

L'annotation `@ControllerAdvice` est une annonation fournie par Spring qui permet de gérer les exceptions
de manière generale dans l'ensemble de l'application.

le but de ce tutoriel est d'expliquer le fonctionnement de l'annotation.

`Spring` est l'un des frameworks le plus populaire du Java.
`@ControllerAdvice` est une spécialisation de l'annotation `@Component` qui permet de gérer les exceptions sur l'ensemble de l'application dans un composant de gestion global. Il peut être considéré comme un intercepteur d'exceptions levées par des méthodes annotées avec `@RequestMapping` et similaires.
Cet annotation a été introduit dans la version 3.2 de spring.

[simple documentation](https://medium.com/@jovannypcg/understanding-springs-controlleradvice-cd96a364033f)
