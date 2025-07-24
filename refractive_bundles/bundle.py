import uuid

class RefractiveBundle:
    def __init__(self, fixtures, tral_tag=None):
        self.fixtures = fixtures
        self.tral_tag = tral_tag or self._generate_tral_tag()
        self.branches = []

    def _generate_tral_tag(self):
        return str(uuid.uuid4())

    def branch(self):
        for fixture in self.fixtures:
            new_branch = {
                "fixture": fixture,
                "parent_tral_tag": self.tral_tag,
                "branch_tral_tag": self._generate_tral_tag(),
            }
            self.branches.append(new_branch)
        return self.branches
