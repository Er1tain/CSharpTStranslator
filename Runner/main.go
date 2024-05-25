package main

import (
	"log"
	"os"
	"os/exec"
	"time"
)

func runReactApp() {
	cmdReact := exec.Command("npm", "start")
	cmdReact.Dir = "C:\\Users\\Alex\\Desktop\\repo\\CSharpTStranslator\\gui"
	cmdReact.Stdout = os.Stdout
	cmdReact.Stderr = os.Stderr

	errReact := cmdReact.Start()
	if errReact != nil {
		log.Fatal(errReact)
	}

	errReactWait := cmdReact.Wait()
	if errReactWait != nil {
		log.Fatal(errReactWait)
	}
}

func runAPI_translator() {
	cmdAPI := exec.Command("dotnet", "run")
	cmdAPI.Dir = "C:\\Users\\Alex\\Desktop\\repo\\CSharpTStranslator\\API_translator"
	cmdAPI.Stdout = os.Stdout
	cmdAPI.Stderr = os.Stderr

	errAspNet := cmdAPI.Start()
	if errAspNet != nil {
		log.Fatal(errAspNet)
	}

	errAPIWait := cmdAPI.Wait()
	if errAPIWait != nil {
		log.Fatal(errAPIWait)
	}

}

func main() {

	go runAPI_translator()
	go runReactApp()

	time.Sleep(time.Second * 6)

}
