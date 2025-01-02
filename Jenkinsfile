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

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker Images...'
                dir('backend') { // Ensure the working directory is correct
                    sh "docker-compose -f $DOCKER_COMPOSE_FILE build"
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                echo 'Running Backend Tests...'
                dir('backend') { // Ensure the working directory is correct
                    sh "docker-compose -f $DOCKER_COMPOSE_FILE up -d"
                    sh 'npm test'
                }
            }
        }

        stage('Run Frontend Tests') {
            steps {
                echo 'Running Frontend Tests...'
                sh 'npm test'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying Application...'
                dir('backend') { // Ensure the working directory is correct
                    sh "docker-compose -f $DOCKER_COMPOSE_FILE up -d"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            dir('backend') { // Ensure the working directory is correct
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
