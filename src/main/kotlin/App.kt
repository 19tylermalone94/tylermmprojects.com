import io.ktor.application.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main() {
    embeddedServer(Netty, port = 8080) {
        routing {
            get("/") {
                val projects = listOf(
                    Project("Project 1", "Description of Project 1", "/images/project1.jpeg"),
                    Project("Project 2", "Description of Project 2", "/images/project2.jpeg")
                    // Add more projects as needed
                )
                val htmlContent = buildHtml(projects)
                call.respondText(htmlContent, ContentType.Text.Html)
            }

            static("/images") {
                resources("static/images")
            }
        }
    }.start(wait = true)
}

fun buildHtml(projects: List<Project>): String {
    val projectsHtml = projects.joinToString("") { project ->
        """
        <div class="project">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <img src="${project.imageUrl}" alt="Image of ${project.name}" style="width:200px;height:auto;">
        </div>
        """
    }

    return """
        <html>
        <head>
            <title>Project Gallery</title>
            <style>
                .project { margin-bottom: 20px; }
            </style>
        </head>
        <body>
            <h1>My Projects</h1>
            $projectsHtml
        </body>
        </html>
    """.trimIndent()
}
