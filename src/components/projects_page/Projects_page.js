import './style.scss';
import Project_item from './project_item';


export default function Projects_page() {
    return (
        <div className="projects_page">
            <h2>My Projects</h2>


            <Project_item title="Python text and file excahnger in console web-sockets based"
                content={<>
                This repository contains my final project for the Principles of Computer Networks course.
                The goal of this project is to design and implement a custom communication protocol for data transfer over UDP, supporting secure and reliable exchange of both files and text messages.

                Key Features:

                <ul>
                    <li>Reliable data transmission using custom ARQ (Automatic Repeat reQuest) mechanisms</li>

                    <li>Keep-Alive system to maintain active connections</li>

                    <li>Fragmentation support for large files and text data</li>

                    <li>Secure message exchange</li>

                    <li>Troubleshooting and diagnostic utilities</li>
                </ul>

                This project explores the fundamentals of network communication, data integrity, and connection reliability — combining academic theory with real implementation.
                </>}
                media_path="/pks_conf.gif"
                github_link="https://github.com/ymarochok/pks-ffp"/>


            <Project_item title="Arch Linux Hyprland configuration" 
               content={
                <>Minimal yet powerful Arch Linux + Hyprland configuration designed for speed, style, and full control.
                This setup blends elegant visual design with functional simplicity — tuned for developers, creators, and power users who live in the terminal.

                Features:

                <ul>
                    <li>Hyprland: dynamic tiling Wayland compositor, fine-tuned for fluid workflow</li>

                    <li>Waybar: custom status bar with reactive modules</li>

                    <li>Rofi: launcher and menu with minimal aesthetic</li>

                    <li>Kitty: GPU-accelerated terminal with personalized keybindings and styling</li>

                    <li>Fish: smart, colorful, and fast shell</li>

                    <li>Cava: audio visualizer integrated into the aesthetic</li>

                    <li>Wallpaper system: lightweight script to control wallpapers dynamically</li>
                </ul>
                Goal:
                A cyber-minimal environment — sharp, responsive, and distraction-free — optimized for coding, design, and daily use.
               </>}
               media_path="/arch_conf.gif"
               github_link="https://github.com/ymarochok/cyber_conf_arch_rice"            />

        
        
        </div>
    )
}