build_img:
	sudo docker build -f mydockerfile -t docusaurus-image .

delete_img:
	sudo docker rmi docusaurus-image

start_serv:
	sudo docker run -d -p 3002:3002 --name ubblot -m 1g docusaurus-image

stop_serv:
	sudo docker stop ubblot

remove_serv:
	sudo docker rm ubblot

update_website: stop_serv remove_serv delete_img build_img start_serv
