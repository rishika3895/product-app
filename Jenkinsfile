pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = "backend/docker-compose.yml"
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
                dir('backend'){
                sh 'docker-compose build'
            }
        }
        }

        stage('Run Backend Tests') {
            steps {
                echo 'Running Backend Tests...'
                sh 'docker-compose up -d'
                sh 'npm test --prefix backend'
            }
        }

        stage('Run Frontend Tests') {
            steps {
                echo 'Running Frontend Tests...'
                sh 'npm test --prefix frontend'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying Application...'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker-compose down'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
