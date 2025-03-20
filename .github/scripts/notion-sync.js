const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

async function main() {
  try {
    // Пробуем получить данные из базы
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID
    });
    
    console.log('✅ Подключение к Notion успешно!');
    console.log('📊 Количество записей:', response.results.length);
    
    // Выводим первую запись для проверки (если есть)
    if (response.results.length > 0) {
      console.log('📝 Пример первой записи:', JSON.stringify(response.results[0], null, 2));
    }

  } catch (error) {
    console.error('❌ Ошибка:', error.message);
    console.error('🔍 Детали ошибки:', error);
    process.exit(1);
  }
}

main();
