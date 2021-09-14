def imageName = "calvinrahmat/front:dev"
def builderImage

pipeline {
    agent any
        parameters{
            booleanParam(name:"BuildImage", defaultValue:"false",description:"" )
            booleanParam(name:"TestingImage", defaultValue:"false",description:"" )
            booleanParam(name:"PushImage", defaultValue:"false",description:"" )
        }
        stages{
            stage('Build Image') {
                when {
                    expression {
                        params.BuildImage
                    }                    
                }
                steps {
                    script {
                        builderImage = docker.build("${imageName}")
                    }
                }
            }
            stage('Testing image') {
                steps {
                when {
                    expression{
                        params.TestingImage
                    }                    
                }   
                    script {
                        builderImage.inside {
                            sh 'echo test image success'
                        }
                    }
                }
            }
            stage('Push image') {
                steps {
                when {
                    expression{
                        params.PushImage
                    }                    
                }
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
            stage('Testing Frontend') {
            steps {
                script{
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'develop',
                                verbose: false,
                                transfers: [
                                    sshTransfer(                        
                                        execCommand: "curl http://blanja.site/",
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
