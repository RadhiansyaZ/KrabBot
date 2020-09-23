# Future Plans : 
- Make the Bot play music (and actually works of course).
- Choose the Right Data Structures. (Which one? List? Stack? Queue? Custom Collections?)
- Integrate to YouTube.
- Integrate to Spotify API. 
    - **Show the playlist** when taking Spotify Public Playlist.
    - **Fetch** the important data about the song, and search it with **YouTube**

# Command List :
```bash
\command args 1 ... args n
# The args can be query, integer, or
```
## Phase 1 :
1. latency
1. join
1. play || p ```query```
1. resume
1. pause
1. stop
1. disconnect
## Phase 2 :
1. queue || q
1. next 
1. back
1. clear
1. loop
1. shuffle
## Phase 3 :
1. remove ```<(int)postion>```
1. remove range ```<(int)start> <(int)end>``` 
1. search || s ```<(string)query>```
1. info ```<(int)position>```
1. jump || j ```<(int)toPosition>```
1. move || m ```<(int)from> <(int)target>```