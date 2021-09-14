def imageName = "calvinrahmat/front:dev"
def builderImage

pipeline {
    agent any
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
