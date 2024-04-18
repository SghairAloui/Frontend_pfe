node {

    stage ('Checkout SCM'){
        git branch : 'main', url:'https://github.com/SghairAloui/Frontend_pfe.git'
    }

    stage ('Install node module'){
        sh "npm install"
    }


     stage ('Build'){
        sh "npm run build --prod"
    }

    stage ('Build docker image'){
        sh "docker build -t moohamedd/bee-organized-front:tag1 ."
    }

    stage ('Push docker image'){
        sh "docker login -u moohamedd -p Sghair123@+"

        sh "docker push moohamedd/bee-organized-front:tag1"
    }

    
}