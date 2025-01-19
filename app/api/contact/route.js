import { supabase } from '../../lib/supabase';

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Request body:', body);

    const { name, email, message } = body;
    if (!name || !email || !message) {
      console.error('Validation error: Missing fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const { error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Supabase error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save message.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message saved successfully!' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function GET() {
  return new Response("Method not allowed", {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}
