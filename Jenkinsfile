pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    stages {
        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'CI=false npm run build'
                }
            }
        }

        stage('Validate Docker Compose') {
            steps {
                sh '''
                    export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
                    docker compose config
                '''
            }
        }
    }

    post {
        success {
            echo 'LAB30 pipeline completed successfully.'
        }
        failure {
            echo 'LAB30 pipeline failed. Check the stage logs above.'
        }
    }
}
