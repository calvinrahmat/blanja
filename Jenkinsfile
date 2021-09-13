def imageName = "calvinrahmat/front:dev"
def builderImage

pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                script {
                    builderImage = docker.build("${imageName}")
                }
            }
        }
        stage('Testing image') {
            steps {
                script{
                    builderImage.inside {
                        sh 'echo test image success'
                    }
                }
            }
        }
    }
}
