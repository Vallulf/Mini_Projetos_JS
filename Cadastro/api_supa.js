let supabaseUrl = "https://brfjyqxbzuqlzivnwity.supabase.co";
let supabaseKey = "sb_publishable_2Ucklvu_63wwuHbb21SLYA_Ns7kUDAL"//Chave da API

let supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);
console.log("SupaBase Conectado!", supabase)