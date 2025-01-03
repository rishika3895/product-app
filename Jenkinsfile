pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
        PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                echo 'Building Backend Docker Image...'
                dir('backend') {
                    sh "docker-compose -f $DOCKER_COMPOSE_FILE build"
                }
            }
        }

        stage('Build Frontend Code') {
            steps {
                echo 'Building Frontend Code...'
                dir('frontend') {
                    sh "npm install"
                    sh "npm run build"
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                echo 'Deploying Backend...'
                dir('backend') {
                    sh "docker-compose -f $DOCKER_COMPOSE_FILE up -d"
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                echo 'Deploying Frontend...'
                dir('frontend') {
                    sh "npx serve -s build -l 3000 &"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            dir('backend') {
                sh "docker-compose -f $DOCKER_COMPOSE_FILE down"
            }
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
