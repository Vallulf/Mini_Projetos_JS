let supabaseUrl = "https://brfjyqxbzuqlzivnwity.supabase.co";
let supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZmp5cXhienVxbHppdm53aXR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMjU1NjksImV4cCI6MjEwMTcwMTU2OX0.IORk-P4lcPviLF5TxiLwLiZUi1k1AysAwUAWwcOk5vE"  //Chave da API

window.supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);
console.log("SupaBase Conectado!", supabase)