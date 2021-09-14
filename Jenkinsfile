def imageName = "calvinrahmat/front:dev"
def builderImage

pipeline {
    agent any
        parameters{
            booleanParam(name:"BUILD_IMAGE", defaultValue:"false",description:"" )
            booleanParam(name:"TESTING_IMAGE", defaultValue:"false",description:"" )
            booleanParam(name:"PUSH_IMAGE", defaultValue:"false",description:"" )
        }
        stages{
            stage('Build Image') {
                when {
                    expression {
                        params.BUILD_IMAGE
                    }                    
                }
                steps {
                    script {
                        builderImage = docker.build("${imageName}")
                    }
                }
            }
            stage('Testing image') {
                when {
                    expression{
                        params.TESTING_IMAGE
                    }                    
                }   
                steps {
                    script {
                        builderImage.inside {
                            sh 'echo test image success'
                        }
                    }
                }
            }
            stage('Push image') {
                when {
                    expression{
                        params.PUSH_IMAGE
                    }                    
                }
                steps {
                
                    script {
                        builderImage.push()
                    }
                }
            }
            stage('Deploy') {
                steps {
                    script{
                        sshPublisher(
                            publishers: [
                                sshPublisherDesc(
                                    configName: 'develop2',
                                    verbose: false,
                                    transfers: [
                                        sshTransfer(
                                            sourceFiles: "docker-compose.yaml; .env",
                                            execCommand: "cd /home/ubuntu/front; docker-compose down; docker-compose up -d",
                                            execTimeout: 120000,
                                        )
                                    ]
                                )
                            ]
                        )
                    }
                }
            }
            
        }
           
    }
