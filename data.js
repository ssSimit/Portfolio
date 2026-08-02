// Edit this array to add / update projects.
// Everything on both index.html and project.html renders from here.

const projects = [
    {
        id: "navroom-ar",
        title: "Indoor AR Navigation",
        tagline: "HackFusion 2026 winning project",
        shortDesc: "An AR wayfinding app that guides users through a multi-department building using marker-based tracking and real-time pathfinding.",
        longDesc: `Indoor AR Navigation is an
    indoor navigation app built for multi-department institutions — government offices, hospitals,
    colleges — where finding a specific room is
    genuinely hard. Built for HackFusion, an inter-college innovation
    hackathon, as part of a three-person team.

    The core system detects a tracked image marker to anchor a 3D blockout
    model of the building, then uses Unity's NavMesh to calculate a live
    path to a user-selected destination, rendered as a line the user can
    follow in AR. Room selection is handled through a dynamically
    generated UI. Multi-floor navigation is designed around swapping in
    separate NavMesh prefabs per floor marker.`,
        tech: ["Unity", "AR Foundation", "ARCore", "C#", "Blender", "NavMesh", "LineRenderer"],
        video: "assets/videos/arNav.mp4",
        poster: "assets/images/navroom-ar-poster.png",
        orientation: "portrait",
        cardMedia: "image",
        link: "https://github.com/ssSimit/hackathon-indoor-ar-navigation",
        buttonText: "VIEW PROJECT→",
    },
    {
        id: "project-two",
        title: "Extreme Wheels",
        tagline: "A thrilling high-speed racing game available on Y8",
        shortDesc: "Race against challenging bots or compete with friends in local multiplayer split-screen mode.",
        longDesc: `Extreme Wheels is a 3D racing game available on Y8. It features high-speed gameplay and challenging AI opponents. Players can unlock new vehicles, and compete in local multiplayer mode. The game emphasizes fast and immersive environments to provide an engaging racing experience.`,
        tech: ["Unity", "3D", "Y8", "Y8 Ads"],
        video: "assets/videos/extremeWheels.mp4",
        poster: "assets/images/extreme-wheels-poster.png",
        orientation: "landscape",
        cardMedia: "video",
        link: "https://www.y8.com/games/extreme_wheels_2_player_racing",
        playUrl: "https://www.y8.com/games/extreme_wheels_2_player_racing",
        buttonText: "PLAY GAME→",
    },
    {
        id: "project-three",
        title: "ABCs Tracer",
        tagline: "A learning app for kids to trace alphabet letters",
        shortDesc: "Trace the dotted letters to learn the alphabet, with a fun and interactive experience.",
        longDesc: `ABCs Tracer is a learning app designed for young children to practice tracing alphabet letters. The app features alphabets from A-Z with a fun and interactive interface that makes learning the alphabet engaging and enjoyable.`,
        tech: ["Unity", "WebGL", "Y8", "Mobile Friendly"],
        video: "assets/videos/abcTracer.mp4",
        poster: "assets/images/abcs-tracer-poster.png",
        orientation: "landscape",
        cardMedia: "video",
        link: "https://www.y8.com/games/abcs_tracer",
        playUrl: "https://www.y8.com/games/abcs_tracer",
        buttonText: "VIEW PROJECT→",
        showOnHome: true
    },
    {
        id: "project-four",
        title: "Cliffside Racing",
        tagline: "A physics-based racing game on Y8",
        shortDesc: "Inspired by the popular game 'Hill Climb Racing', this game features challenging tracks and realistic vehicle physics.",
        longDesc: `Cliffside Racing is a physics-based racing game available on Y8. It features challenging tracks and realistic vehicle physics. Players can unlock new vehicles and compete for high scores on various tracks.`,
        tech: ["Unity", "Mobile", "WebGL", "Y8 Ads"],
        video: "assets/videos/cliffsideRacing.mp4",
        poster: "assets/images/cliffside-racing-poster.png",
        orientation: "landscape",
        cardMedia: "video",
        link: "https://www.y8.com/games/cliffside_racing",
        playUrl: "https://www.y8.com/games/cliffside_racing",
        buttonText: "PLAY GAME→",
    },
    {
        id: "project-five",
        title: "Call Break Multiplayer",
        tagline: "A multiplayer learning project",
        shortDesc: "A multiplayer card game built in Unity, featuring real-time gameplay and a custom server for managing game state.",
        longDesc: `Developed a scalable Callbreak card game in Unity, initially designed as a single-player project with multiplayer architecture in mind. Built a custom Node.js backend using native WebSockets to learn real-time networking, implementing a gameplay state broadcasting system for synchronized multiplayer sessions. Focused on clean architecture, scalability, and understanding real-time communication.`,
        tech: ["Learning Project", "REST", "WebSockets"],
        video: "assets/videos/callbreakMultiplayer.mp4",
        poster: "assets/images/callbreak-poster.png",
        orientation: "landscape",
        cardMedia: "video",
        link: "https://github.com/ssSimit/callbreak-multiplayer",
        buttonText: "VIEW PROJECT→",
        showOnHome: true
    },
    {
        id: "project-six",
        title: "Shape Explorer",
        tagline: "A shooting puzzle game available on Play Store",
        shortDesc: "Game I built for ChimpVine, where players shoot colored shapes to match and destroy chains of shapes.",
        longDesc: `Placeholder long description. Walk through what the project is,
    the problem it solves, your role, and anything notable about how it
    was built.`,
        tech: ["Unity", "Play Store", "Firebase"],
        video: "assets/videos/shapeExplorer.mp4",
        poster: "assets/images/shapes-explorer-poster.png",
        orientation: "landscape",
        cardMedia: "video",
        link: "https://play.google.com/store/apps/details?id=com.ChimpVine.ShapesExplorer&hl=en_US&pli=1",
        buttonText: "PLAY GAME→",
    }


];