pipeline {
    agent any

    environment {
        BACKEND_COMPOSE_FILE = "docker-compose.yml"
        FRONTEND_DIR = "frontend"
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
                dir('backend') { // Ensure the working directory is correct
                    sh "docker-compose -f $BACKEND_COMPOSE_FILE build"
                }
            }
        }

        stage('Build Frontend Code') {
            steps {
                echo 'Building Frontend Code...'
                dir(FRONTEND_DIR) {
                    sh 'npm install'
                    sh 'npm run build' // Adjust this as per your frontend build script
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                echo 'Running Backend Tests...'
                dir('backend') { // Ensure the working directory is correct
                    sh "docker-compose -f $BACKEND_COMPOSE_FILE up -d"
                    sh 'npm test'
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                echo 'Deploying Backend Application...'
                dir('backend') { // Ensure the working directory is correct
                    sh "docker-compose -f $BACKEND_COMPOSE_FILE up -d"
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                echo 'Deploying Frontend Application...'
                dir(FRONTEND_DIR) {
                    // Replace with your deployment logic for frontend
                    // Example: Copying files to an S3 bucket or deploying to a server
                    echo 'Deploying frontend code...'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            dir('backend') { // Ensure the working directory is correct
                sh "docker-compose -f $BACKEND_COMPOSE_FILE down"
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
