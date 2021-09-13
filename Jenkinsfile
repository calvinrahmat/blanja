def imageName = "calvinrahmat/front:dev"
def builderImage

pipeline {
    agent any

    stages {
        stage('Installing packages') {
            steps {
                nodejs("node14"){
                    sh 'npm install'
                }
            }
             
        }
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
        stage('Push image') {
            steps {
                script{
                    builderImage.push()
                }
            }
        }
         stage('Deploy') {
            steps {
                script{
                    builderImage.push()
                }
            }
        }
    }
}