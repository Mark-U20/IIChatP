// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// #[tauri::command]
// fn send_i2p_message(destination: &str, message: &str) -> Result<String, Box<dyn std::error::Error>> {
//     // Initialize the StreamConnect to I2P
//     let mut stream_conn = StreamConnect::new("127.0.0.1:7656", destination)?; // Assuming StreamConnect takes the SAM address and destination as arguments
//
//     // Send the message
//     stream_conn.write_all(message.as_bytes())?;
//
//     // Return a success message (or handle errors as appropriate)
//     Ok("Message sent successfully!".to_string())
// }

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
