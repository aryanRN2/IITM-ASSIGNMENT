document.querySelector('.ace_editor').env.editor.insert(`
    // Define displayPlayers() method here
    public static void displayPlayers(ArrayList<CricketPlayer> bw, ArrayList<CricketPlayer> bt) {
        for (CricketPlayer bowler : bw) {
            System.out.print(bowler.getName() + " ");
        }
        System.out.println();
        
        for (CricketPlayer batsman : bt) {
            System.out.print(batsman.getName() + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        CricketPlayer p1 = new CricketPlayer(sc.next(), sc.nextInt(), sc.nextInt(), sc.nextInt());
        CricketPlayer p2 = new CricketPlayer(sc.next(), sc.nextInt(), sc.nextInt(), sc.nextInt());
        CricketPlayer p3 = new CricketPlayer(sc.next(), sc.nextInt(), sc.nextInt(), sc.nextInt());
        CricketPlayer p4 = new CricketPlayer(sc.next(), sc.nextInt(), sc.nextInt(), sc.nextInt());

        // Define ArrayList objects here
        ArrayList<CricketPlayer> players = new ArrayList<>();
        players.add(p1);
        players.add(p2);
        players.add(p3);
        players.add(p4);

        ArrayList<CricketPlayer> bt = new ArrayList<>();
        ArrayList<CricketPlayer> bw = new ArrayList<>();

        for (CricketPlayer p : players) {
            if (p.avgRuns() > 25) {
                bt.add(p);
            }
            if (p.avgWickets() > 1) {
                bw.add(p);
            }
        }
       
`);