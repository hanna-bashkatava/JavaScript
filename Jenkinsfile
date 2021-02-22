pipeline {
    agent any
    environment {
                CHROME_LOGS = '/var/jenkins_home/jobs/ProtractorTests/workspace/chromeLogs/'
                ALLURE_REPORT = '/var/jenkins_home/jobs/ProtractorTests/workspace/allure-report/'
                ALLURE_RESULTS = '/var/jenkins_home/jobs/ProtractorTests/workspace/allure-results/'
                JENKINS_BUILD_RESULT = '/var/jenkins_home/jobs/ProtractorTests/workspace/jenkinsBuildResult.json'
            }
    stages {
               stage('Build') {
            steps {
                bat 'npm install'
            }
        }
      
        stage('Test') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat "npm test"
                }
            }
        }
        stage('Allure Report') {
            steps {
                allure includeProperties: false,
                             jdk: '',
                             results: [[path: 'allure-results']]
            }
        }
  
    }
}