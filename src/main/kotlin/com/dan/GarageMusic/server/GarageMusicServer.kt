package com.dan.GarageMusic.server

import spark.Spark.*

fun main(args: Array<String>) {
    startServer(portNumber = 9000)
}

fun startServer(portNumber: Int) {
    port(portNumber)
    setRoutes()
}

fun setRoutes() {
    staticFiles.externalLocation("public")
    get("/") {req ,res -> "/public/index.html"}
}
