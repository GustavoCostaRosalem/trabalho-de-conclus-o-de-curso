const sqlite3 = require("sqlite3").verbose()
const fs = require("fs")
const express = require("express")

// Conectar ao banco de dados
const db = new sqlite3.Database("./dbcgbr.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message)
  } else {
    console.log("Conectado ao banco de dados!")
  }
})
