package com.dan.GarageMusic.server

import spark.Spark.*

fun main(args: Array<String>) {
    startServer(portNumber = 9000)
}

fun startServer(portNumber: Int) {
    port(portNumber)
    setRoutes()2
}

fun setRoutes() {
    staticFiles.externalLocation("public/app")
    get("/") {req ,res -> "/public/index.html"}
}
