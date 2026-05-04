pipeline {
    agent any

    environment {
        CI = 'false'
    }

    stages {
        stage('Check Node') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            node --version
                            npm --version
                        '''
                    } else {
                        bat '''
                            node --version
                            npm --version
                        '''
                    }
                }
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    script {
                        if (isUnix()) {
                            sh 'npm ci'
                        } else {
                            bat 'npm ci'
                        }
                    }
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    script {
                        if (isUnix()) {
                            sh 'npm ci'
                        } else {
                            bat 'npm ci'
                        }
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    script {
                        if (isUnix()) {
                            sh 'npm run build'
                        } else {
                            bat 'npm run build'
                        }
                    }
                }
            }
        }

        stage('Validate Docker Compose') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
                            docker compose config
                        '''
                    } else {
                        bat 'docker compose config'
                    }
                }
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
