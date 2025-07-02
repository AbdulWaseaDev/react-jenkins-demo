pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/AbdulWaseaDev/react-jenkins-demo.git'
            }
        }

        stage('Install & Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy via SSH') {
            steps {
                sshPublisher(publishers: [
                    sshPublisherDesc(
                        configName: 'AWS-Light-Sail-VM',
                        transfers: [
                            sshTransfer(
                                sourceFiles: 'build/**/*',
                                removePrefix: 'build/',
                                remoteDirectory: '/var/www/react-app-jenkins',
                                execCommand: 'sudo systemctl restart caddy'
                            )
                        ],
                        usePromotionTimestamp: false,
                        verbose: true
                    )
                ])
            }
        }
    }
}
