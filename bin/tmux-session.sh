#!/bin/bash

tmux new-session -d -s dev

# Split the window into 3 horizontal panes
tmux split-window -h
tmux split-window -v

# Select the second pane and run 'npm dev'
tmux select-pane -t 1
tmux send-keys "npm run watch-test" C-m

# Select the last pane and run 'npm test'
tmux select-pane -t 2
tmux send-keys "npm run dev" C-m

tmux select-pane -t 0
tmux send-key "code ." C-m

# Attach to the created session
tmux attach-session -t dev
