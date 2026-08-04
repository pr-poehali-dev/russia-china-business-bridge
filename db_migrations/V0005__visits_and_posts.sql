CREATE TABLE IF NOT EXISTS visits (
    id SERIAL PRIMARY KEY,
    ip VARCHAR(64),
    country VARCHAR(80),
    country_code VARCHAR(8),
    path VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_visits_created_at ON visits (created_at);
CREATE INDEX IF NOT EXISTS idx_visits_country ON visits (country);

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    cover_url TEXT,
    published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts (created_at);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts (published);